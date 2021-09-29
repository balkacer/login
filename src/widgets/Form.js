import Card from "../components/Card";

export default function Form() {
  return (
    <Card title="Login">
      <form className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label> 
          <input type="Email" placeholder="Email" class="input input-bordered"/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label> 
          <input type="password" placeholder="Password" class="input input-bordered"/>
          <label class="label">
            <a href="/" class="label-text-alt">Forgot password?</a> 
          </label>
        </div>
        </div>
        <div class="card-actions grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 w-full">
          <button class="btn btn-primary w-full">Sign In</button>
          <button class="btn btn-outline w-full">Sign Up</button> 
        </div>
      </form>
    </Card>
  );
}
