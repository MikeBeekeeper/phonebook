
import css from '../contactForm/contactForm.module.css';
const ContactForm = () => {

    return (
        <form className={css.form}>
            <labe htmlFor="name" className={css.formLabel}> Name</labe>
                <input className={css.formInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            
            <label htmlFor="number" className={css.formLabel}> Number</label>
                <input className={css.formInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            <button type="submit" className={css.submitBtn}>Add contact</button>
        </form>
    )
};

export default ContactForm;