import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import styles from './index.module.scss'
import { postOne } from '../../API/requests';
import Swal from "sweetalert2";

const validationSchema = yup.object({
    title: yup.string().required('Başlıq hissəsi boş qala bilməz!'),
    description: yup.string().required('Təsvir hissəsi boş qala bilməz!'),
    name: yup.string().required('Ad hissəsi boş qala bilməz!'),
    phone: yup.string().required('Telefon hissəsi boş qala bilməz!'),
    email: yup.string().email('Yanlış email ünvanı').required('Email hissəsi boş qala bilməz!'),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            name: '',
            phone: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            formik.resetForm()
            postOne('student/contact', values).then((res) => {
              
                Swal.fire({
                    icon: "success",
                    text: res.data,
                });
            }).catch((err) => {
                console.log(err);
            })
        },
    });

    return (
        <div className={styles.contact} id="contact-section">
            <div className="container">
                <h1>Contact</h1>
                <div className={`d-flex flex-wrap ${styles.df}`}>
                    <div className={`${styles.map} col-lg-6 col-md-12 col-sm-12`}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349.99688299128!2d49.9466520326468!3d40.368956442917124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5393120fd9%3A0x642801f0156fa816!2sGSL%20Training%20Center!5e0!3m2!1sen!2saz!4v1720096402796!5m2!1sen!2saz" width="600" height="450" ></iframe>
                    </div>
                    <div className={`${styles.form} col-lg-6 col-md-12 col-sm-12`}>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                id="title"
                                name="title"
                                label="Title"
                                variant="outlined"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Phone"
                                variant="outlined"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
