import "./Cards.css";
import Users from "./user.json";

console.log(Users);

export default function Card({name,age,phone,address}) {
  return (
      <div>
          <div className="card">
              <h2 className="name">{name}</h2>
              <div className="body">
                  <div className="label">Age:</div>
                  <div>{Users.age}</div>
                  <div className="label">Phone:</div>
                  <div>{Users.phoneNumber}</div>
                  <div className="label">Address:</div>
                  <div>{Users.address}</div>
              </div>
          </div>
      </div>
    );
}
