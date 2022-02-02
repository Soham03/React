const mounting=()=>{
    return (
    <div>
    <h1>Mounting</h1>
    <p>The name is self-explanatory. Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).

This phase comes onto the scene after the initialization phase is completed. In this phase, our component renders the first time. The methods that are available in this phase are:

1. componentWillMount()

This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.

Note: You should not make API calls or any data changes using this.setstate in this method because it is called before the render method. So, nothing can be done with the DOM (i.e. updating the data with API response) as it has not been mounted. Hence, we can’t update the state with the API response.

2. componentDidMount()

This method is called after the component gets mounted on the DOM. Like componentWillMount, it is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM). We can make API calls and update the state with the API response.

</p> 
    </div>); 
   }
   
   export default mounting;