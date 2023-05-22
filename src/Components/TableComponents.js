import { useEffect, useState } from "react";

const Table=(props)=>{
    console.log("hhhhhhhhhhhhh",props);
    const data3=[
        {
          name:"aaaaaaaaaa",
          dep:"develop",
          id:1,
          city:"chennai"
        },
        {
          name:"bbbbbbbbbb",
          dep:"sales",
          id:2,
          city:"bang"
        },
        {
          name:"cccccccccccc",
          dep:"mobile",
          id:3,
          city:"chennai"
        }
      ]
    const [value, setValue] = useState(props.data)
    const [data, setData] = useState([])
    
    useEffect(()=>{
        setValue(props.data);
        setData(props.data)

        const llll = [1,[2],3,[45]]
        console.log("fffffffffffff",llll.flatMap((res)=>res));
        let data = data3.map((res)=>{
            return res.city === "chennai"
        })

        let dataa = data3.filter((res)=>{
            return res.city === "chennai"
        })
        let array=[];
        let datasss = data3.forEach((res)=>{
            if(res.city === "chennai"){
                array.push(res)
                console.log("hhhhhhhhhhhhhhhhhhh",array);
            }
        })
        console.log("mapppppp",data,"filllllllll",dataa,"jjjjjjjjjjjj",datasss);
    },[props])
    
    const handleChage=(event)=>{
        let datas = data?.filter((res)=>{
            if(res.dep.includes(event.target.value.trim())||res.name.includes(event.target.value.trim())||res.city.includes(event.target.value.trim())){
                return res
            }
        })
        setValue(datas)
    //    setValue((value)=>{return value?.data?.filter((res)=>res.dep.includes(event.target.value))})
    }
    const click=()=>{
        props.click(data3)
    }
    return(
        <div>
            <input placeholder="search Box" type={"text"} onChange={handleChage}></input>
            <table>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Dep</th>
                                <th>City</th>
                                {value?.map((res)=>{
                                    return(
                                <tbody>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.dep}</td>
                                    <td>{res.city}</td>
                                </tbody>
                                    )
                                })
                                }
                            </table>
                            <button onClick={click}>Child</button>
           
        </div>
    )
}
export default Table;