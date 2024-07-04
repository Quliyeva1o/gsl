import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useFormik } from 'formik';
import { getAll, getOne } from '../../API/requests';
import { Select, MenuItem } from '@mui/material';
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";

const Ticket = () => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        getAll('exam/types?status=0').then((res) => {
            console.log(res.data);
            const mappedExams = res.data.map((exam) => ({
                value: exam.token,
                label: exam.title,
            }));
            setExams(mappedExams);

            if (mappedExams.length > 0) {
                formik.setFieldValue('exam', mappedExams[0].value);
            }
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            exam: '',
            student: '',
        },
        onSubmit: (values) => {
            console.log(values);
            getOne('exam/results', values.student, values.exam).then((res) => {
                Swal.fire({
                    // icon: "error",
                    // title: "Oops...",
                    text: res.data,
                    // footer: '<a href="#">Why do I have this issue?</a>'
                });
            }).catch((err) => {
                console.log(err);
                setResult("tapilmadi")
            })
        },
    });

    return (
        <>
            {exams.length > 0 && (
                <div className={styles.ticket}>
                    <div className="container d-lg-flex justify-content-between ">
                        <div>
                            <h1>İmtahan biletini əldə et!</h1>
                        </div>
                        <div>
                            <form action="" onSubmit={formik.handleSubmit} className={styles.form}>
                                <Select
                                    id="exam"
                                    name="exam"
                                    onChange={(event) => {
                                        const selectedOptions = Array.isArray(event.target.value)
                                            ? event.target.value
                                            : event.target.value;
                                        formik.setFieldValue("exam", selectedOptions);
                                    }}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.exam}
                                    placeholder="Select Exam"
                                    fullWidth
                                >
                                    {exams.map((exam) => (
                                        <MenuItem key={exam.value} value={exam.value}>
                                            {exam.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <TextField
                                    name="student"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.student}
                                    id="student"
                                    type="text"
                                    label="İş Nömrənizi daxil edin"
                                    variant="outlined"
                                    error={formik.touched.student && Boolean(formik.errors.student)}
                                    helperText={formik.touched.student && formik.errors.student}
                                />

                                <button type="submit">Formu Gönder</button>
                            </form>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Ticket;
