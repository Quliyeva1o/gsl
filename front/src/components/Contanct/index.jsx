import { useFormik } from 'formik';
import React from 'react'

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            ad: '',
            soyad: '',
            ataAd: '',
            tehsilAldMu: '',
            elaqeNom: '',
            sinif: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <>
            <div className="contact">
                <div className="container">
                    <h1>Contact</h1>
                    <div className="form">
                        <form action="">

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
