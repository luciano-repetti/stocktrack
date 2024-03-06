import styles from '@/styles/modules/Input.module.css'

export function Input({ label, required, type, placeholder, error, name, value, onChange, style, ...rest }) {

    const text_placeholder = placeholder ? placeholder : ""

    return (
        <Label {...rest} label={label} required={required} error={error} style={style}>
            <input {...rest} className={error && "error"} placeholder={text_placeholder} type={type} required={required} name={name} value={value} onChange={onChange} />
        </Label>
    )
}

export function Textarea({ label, required, error, placeholder, name, value, onChange }) {

    const text_placeholder = placeholder ? placeholder : ""

    return (
        <Label label={label} required={required} error={error} >
            <textarea className={error && "error"} placeholder={text_placeholder} required={required} cols="30" rows="10" name={name} value={value} onChange={onChange}></textarea>
        </Label>
    )
}

export function Label({ label, required, error, style, children, ...rest }) {
    return (
        <label className={styles.label} style={style}>
            {label} {required && "*"}
            {children}
            {error && (
                <p className='message_error'>{error}</p>
            )}
        </label>
    )
}