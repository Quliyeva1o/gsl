import React from 'react'
import styles from "./index.module.scss"
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';

const Ticket = () => {
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
            <div className={styles.ticket}>
                <div className="container d-lg-flex justify-content-between ">
                    <div>
                        <h1>İmtahan biletini əldə et!</h1>
                    </div>
                    <div>
                        <form action="" onSubmit={formik.handleSubmit} className={styles.form}>
                            <label htmlFor="ad">Ad:</label>
                            <TextField id="outlined-basic" variant="outlined" name='ad' value={formik.values.ad} onChange={formik.handleChange} />
                            <label htmlFor="soyad">Soyad:</label>
                            <TextField id="outlined-basic" variant="outlined" name='soyad' value={formik.values.soyad} onChange={formik.handleChange} />
                            <label htmlFor="ataAd">Ata Adı:</label>
                            <TextField id="outlined-basic" variant="outlined" name='ataAd' value={formik.values.ataAd} onChange={formik.handleChange} />
                            <label htmlFor="tehsilAldMu">tehsil Ald Mu:</label>
                            <TextField id="outlined-basic" variant="outlined" name='tehsilAldMu' value={formik.values.tehsilAldMu} onChange={formik.handleChange} />
                            <label htmlFor="elaqeNom">elaqe Nom:</label>
                            <TextField id="outlined-basic" variant="outlined" name='elaqeNom' value={formik.values.elaqeNom} onChange={formik.handleChange} />
                            <label htmlFor="sinif">sinif:</label>
                            <TextField id="outlined-basic" variant="outlined" name='sinif' value={formik.values.sinif} onChange={formik.handleChange} />

                            <button type='submit'>Formu Gonder</button>

                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Ticket
