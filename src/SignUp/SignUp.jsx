import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './SignUp.module.css'
import { useHistory } from 'react-router-dom'

const SignUp = () => {
    const history = useHistory()
    const handleSubmit=()=>{history.push('/thank-you')}
    const handleCancel=()=>{history.push('/')}
    return (
        <div>
            <Header />
            <section className={styles.section}>
            <div className={styles.container}>  
            <div className={styles.titleContainer}>
            <h1 className={styles.title}>Sign Up</h1>
            </div>
            <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <div>
                <label className={styles.label}>Username</label>
                <input className={styles.input}
                type="text" required
                />
                </div>
                <div>
                <label className={styles.label}>Name</label>
                <input className={styles.input}
                type="text" required
                />
                </div>
                <div>
                <label className={styles.label}>Email</label>
                <input className={styles.input}
                type="email" placeholder="xxx@xxx.com" 
                required
                />
                </div>
                <div>
                <label className={styles.label}>Password</label>
                <input className={styles.input}
                type="password" required
                />
                </div>
                <div>
                <label className={styles.label}>Phone Number</label>
                <input className={styles.input} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx"
                 required
                />
                </div>
                <div>
                 <div>
                 <label for="gender" className={styles.label}>Gender</label>
                 <select id="gender" name="gender">
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="other">Other</option>
                     </select>   
                </div>
                <div>
                 <label for="degree" className={styles.label}>Higest Degree</label>
                 <select id="degree" name="degree">
                     <option value="bachelor">Bachelor Degree Or Above</option>
                     <option value="hign-school">High School</option>
                     <option value="other">Other</option>
                     </select>
                <div>
                <p>Select a your age:</p>
                <input type="radio" id="r1" name="r1" value="r1" checked />
                <label for="r1">Under 18</label>
                <input type="radio" id="r2" name="r1" value="r2" checked/>
                <label for="r2">18-40</label>
                <input type="radio" id="r3" name="r1" value="r3" checked/>
                <label for="r3">Above 40</label>
                </div>    
                </div>
                </div>
                <div className={styles.btnContainer}>
                <button className={styles.button} onClick={handleCancel}> Cancel</button>
                <button className={styles.button} type="submit"> Sign Up</button>
                </div>
            </form>
            </div>
            </div>
            </section>
            <Footer />
        </div>
    )
}
export default SignUp