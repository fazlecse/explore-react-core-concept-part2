export default function ({Friend}) {
const {name, email} = Friend;
  return (
    <div>
      <h4>Name : {name}</h4>
      <p>Email : {email} </p>
    </div>
  );
}
