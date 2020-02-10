

const NewPostInput = (props) => {
    

    return(
        <div className = "form-group row">

            <label htmlFor = {props.name} className="col-sm-2 col-form-label">
                {props.name}:
            </label>
            <div className = 'col-sm-10'>
                <textarea 
                className="form-control"
                type =  'text'
                value = {props.value}
                name={props.name}
                onChange = {((e) => props.onChange(e))}
                rows="3"
                id = {props.name}
                />
            </div>
        </div>
    )
}

export default NewPostInput