import React, { useState } from 'react'

export default function Us9() {
    const [data,setData] = useState({});
    function hc(event){
        const {name,value} = event.target;
        setData({...data,[name]:value});
    };
    function hs(e){
        e.PreventDefault();
        alert('name is : '+data.fname+" "+data.num+" "+data.email+" "+data.ck+" "+data.val);
    };
    return (
        <div>
            <form onSubmit={hs}>
                <fieldset><legend>Customer Detail</legend>
	                <table>
                        <tbody>
                            <tr> 
                                <th>  Name: </th>
                                <td> <input type="text" placeholder="Enter your Name" maxlength="10" name='fname' onChange={hc}/> </td>	
                            </tr>
                            <tr> 
	                            <th> Number: </th>
	                            <td> <input type="tel" placeholder="Enter your Number" maxlength="10" name='num' onChange={hc}/> </td>	
                            </tr>
                            <tr> 
	                            <th>  Email: </th>
	                            <td> <input type="email" placeholder="Enter your Email" name='email' onChange={hc}/> </td>	
                            </tr>
                            <tr> 
	                            <th>  Pizza Name: </th>
	                            <td> 
                                    <input type="checkbox" name='ck' onChange={hc} /> Simple. veg <br></br>
                                    <input type="checkbox" name='ck' onChange={hc} /> 7 Cheeze <br></br></td>	
                            </tr>
                            <tr> 
                                <th> Outlet City: </th>
                                <td> <select name='sel'>	
                                    <option value="" selected="" disable="" hidden="">--List of Area-- </option>	
                                    <option val='ahm' onChange={hc}> Ahmedabad </option>
                                    <option val='gdh' onChange={hc}> Gandhinagar </option>
                                    <option val='bar' onChange={hc}> Baroda </option>
                                    </select> 
                                </td>	
                            </tr>
                            <tr>
                                <th>Order date:</th>
                                <td><input type="date" name='date' onChange={hc} /></td>
                            </tr>
                            <tr>
                                <th>Comment:</th>
                                <td> <textarea cols="15" rows="2" name='comm' onChange={hc} ></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
                <fieldset><legend>Scale Ordered Pizza </legend>
                    <table rules="all">
                        <tbody>
                            <tr>
                                <th>Scale</th>
                                <th> Good </th>
                                <th> Avg. </th>
                                <th> Bad </th>
                            </tr>
                            <tr>
                                <th>Quality</th>
                                <th> <input type="radio" name="a1" checked="" onChange={hc} /> </th>
                                <th> <input type="radio" name="a1" onChange={hc}  /> </th>
                                <th> <input type="radio" name="a1" onChange={hc} /> </th>
                            </tr>
                            <tr>
                                <th>Quantity</th>
                                <th> <input type="radio" name="a2" checked="" onChange={hc} /> </th>
                                <th> <input type="radio" name="a2" onChange={hc} /> </th>
                                <th> <input type="radio" name="a2" onChange={hc} /> </th>
                            </tr>
                            <tr>
                                <th>Freshness</th>
                                <th> <input type="radio" name="a3" onChange={hc}/> </th>
                                <th> <input type="radio" name="a3" checked="" onChange={hc}/> </th>
                                <th> <input type="radio" name="a3" onChange={hc}/> </th>
                            </tr>
                            <tr>
                                <th>Overall <br></br> Rating </th>
                                <th colspan="3">0<input type="range" scale="1" onChange={hc}/> 10</th>
                            </tr>
                            <tr align="center">
                                <td colspan="4"><input type="submit"/></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>        
        </div>
    );
};