import {useForm} from 'react-hook-form'
import './App.css';

function App(props) {
const {register,handleSubmit,formState:{errors}}=useForm()
const submit=submission=>console.log(submission)

  return (
    <form id="form" onSubmit={handleSubmit(submit)}>
      <div>
      <br/>
      <label>
        Rating:
      </label>
      <br/>
      <select defaultValue=" " {...register("rating",{required:true,message:"Select an option"})}>
      <option value=" " disabled>
          Give Ratings
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br/>
      {errors.rating && (<p style={{color:"red"}}>{errors.rating.message}</p>) }
      <br/>

        <div>
          <label>Name:</label>
      </div>
      <input type="text" {...register('firstName',{required:{value:true,message:"Enter a name"},minLength:{value:3,message:"Length should be greater than 2 characters"},maxLength:{value:14,message:"Length should be less than 15 characters"}})}/>
      <br/>
      {errors.firstName && (<span>{errors.firstName.message}</span>)}
      </div>
      <br/>
      <div>
        <div>
          <label>Password:</label>
      </div>
      <input type="password" {...register('password',{required:{value:true,message:"Enter a password"},minLength:{value:5,message:"Length should be greater than 5 characters"}})}/>
      <br/>
      {errors.password && (<span>{errors.password.message}</span>)}
      <br/>
      <label htmlFor="comment">Comment:</label>
      <br/>
      <input id="comment" type="text" {...register('comment',{required:{value:true,message:"Enter the comment"}})} ></input>
      <br/>
      <br/>
      <button type="submit" className="btn btn-outline-primary">Submit</button>
      </div>
      <br/>

      
    </form>
     );
}

export default App;
