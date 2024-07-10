import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useFormik } from 'formik';
import { getAll, getOne } from '../../API/requests';
import { Select, MenuItem } from '@mui/material';
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { useGetExamsQuery } from '../../redux/examSlice';
import * as yup from 'yup'; 

const Exam = () => {
    const [exams, setExams] = useState([]);
    const { data: examm } = useGetExamsQuery();
    const validationSchema = yup.object({
        exam: yup.string().required('İmtahanı seçməlisiniz'),
        student: yup.string().required('İş nömrəsi mütləqdir'),
    });
    useEffect(() => {

        if (examm) {
            const mappedExams = examm.map((exam) => ({
                value: exam.token,
                label: exam.title,
            }));
            setExams(mappedExams);
            if (mappedExams.length > 0) {
                formik.setFieldValue('exam', mappedExams[0].value);
            }
        }
    }, [examm]);

    const formik = useFormik({
        initialValues: {
            exam: '',
            student: '',
        },
        validationSchema: validationSchema, 

        onSubmit: (values) => {
            console.log(values);
            getOne('exam/results', values.student, values.exam).then((res) => {
                Swal.fire({
                    text: res.data,
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
                <div className={styles.exam} id='exam-section'>
                    <div className="container d-lg-flex justify-content-between ">
                        <div>
                            <h1>İmtahan nəticəsini sürətli öyrən</h1>
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

export default Exam;
