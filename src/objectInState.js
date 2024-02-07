import { useState } from "react";

export default function ObjectInState() {
    const [name, setName] = useState("");
    // const [list, setList] = useState([
    //     {id:1, name:'Ana'},
    //     {id:2, name:'Uta'},
    //     {id:3, name:'AnaUta'}
    // ])
    const [list1, setList1] = useState({
      name1: "ana",
      name2: "Uta",
      name3: "Anauta",
    });
    const [student, setStudent] = useState({
      name: "uttam",
      artwork: {
        title: "Blue Nana",
        city: "Hamburg",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYu5eDkhI9c8Zvxt9dRIP5-9X0Xu2CUXednoUIgHNwsA&s",
      },
    });

  function setStudentDetail(e) {
    // console.log(e);
    switch (e.target.id) {
      case "name":
        setStudent({
          ...student,
          name: e.target.value,
        });
        break;
      case "city":
        setStudent({
          ...student,
          artwork: {
            ...student.artwork,
            city: e.target.value,
          },
        });

        break;
      case "title":
        setStudent({
          ...student,
          name: student.name,
          artwork: {
            ...student.artwork,
            title: e.target.value,
          },
        });
        break;
      case "image":
        setStudent({
          ...student,
          name: student.name,
          artwork: {
            ...student.artwork,
            image: e.target.value,
          },
        });
        break;
    }
  }

//   return (
//     <>
//       <div>
//         <label htmlFor="name">
//           Name:{" "}
//           <input
//             id="name"
//             value={student.name}
//             //event occure
//             onChange={(e) => setStudentDetail(e)}
//           ></input>
//           {/* <span> {student.name}</span> */}
//         </label>
//         <label htmlFor="title">
//           Title:{" "}
//           <input
//             id="title"
//             value={student.artwork.title}
//             onChange={(e) => setStudentDetail(e)}
//           ></input>
//           {/* <span> {student.name}</span> */}
//         </label>
//         <label htmlFor="city">
//           City:{" "}
//           <input
//             id="city"
//             value={student.artwork.city}
//             onChange={(e) => setStudentDetail(e)}
//           ></input>
//           {/* <span> {student.name}</span> */}
//         </label>
//         <label htmlFor="image">
//           Image:{" "}
//           <input
//             id="image"
//             value={student.artwork.image}
//             onChange={(e) => setStudentDetail(e)}
//           ></input>
//         </label>
//         <div>
//           <span> {student.name}</span>
//           <br></br>
//           <span> {student.artwork.title}</span>
//           <br></br>
//           <span> {student.artwork.city}</span>
//           <br></br>
//           <img src={student.artwork.image} />
//         </div>
//       </div>

//       <input id="ddf" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//       <select>
//         <option></option>
//       </select>
//     </>
//   );

  return(
    // <div>
    //     {
    //         list.map((item) => <Card key={item.id} item={item}/>)
    //     }
    // </div>
    <div>
        
          {
            // Object.values(list1).map(name => <Card name={name}/>)
            Object.entries(list1).map(([key,val]) => <Card name={val}/>)

          }
        
    </div>
  )
}

function Card(props) {
    return  <div>{props.name}</div>
}
