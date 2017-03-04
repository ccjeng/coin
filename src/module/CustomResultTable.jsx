import React from 'react'
import CustomResultCell from '../module/CustomResultCell.jsx'

const img1 = process.env.PUBLIC_URL + '/img/d1.jpg';
const img5 = process.env.PUBLIC_URL + '/img/d5.jpg';
const img10 = process.env.PUBLIC_URL + '/img/d10.jpg';
const img50 = process.env.PUBLIC_URL + '/img/d50.jpg';
const img100 = process.env.PUBLIC_URL + '/img/d100.jpeg';
const img500 = process.env.PUBLIC_URL + '/img/d500.jpeg';
const img1000 = process.env.PUBLIC_URL + '/img/d1000.jpeg';

export default class CustomResultTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.resultAry
        }
    }

    render() {
        return (
            <center>
               <TableBody data={this.state.data}/><br/>               
            </center>
        )
    }
}

/**
 * tbody
 * 關鍵點是使用props來傳遞單向數據流。通過遍歷從`props傳來的數據data`生成表格的每一行數據
 */
class TableBody extends React.Component{
    render() {
        return (
            <div>
	            {this.props.data.map(function (coins, index) {
	                return <Item data={coins} index={index} key={index}/>
	            })}               
            </div>
            
        )
    }
}
/**
 * td
 * 每一行都需設置unique "key" prop
 */

class Item extends React.Component{
    render() {
        var index = this.props.index;
        var data = this.props.data;

        return (
        <div>
            <table className='table table-bordered'>
                    <thead>
                    <tr key='0'>
                        <th className={data.d1000===0 ?'hidden':'text-center'}><img src={img1000}/></th>
                        <th className={data.d500===0 ?'hidden':'text-center'}><img src={img500}/></th>
                        <th className={data.d100===0 ?'hidden':'text-center'}><img src={img100}/></th>
                        <th className={data.d50===0 ?'hidden':'text-center'}><img src={img50}/></th>
                        <th className={data.d10===0 ?'hidden':'text-center'}><img src={img10}/></th>
                        <th className={data.d5==0 ?'hidden':'text-center'}><img src={img5}/></th>
                        <th className={data.d1===0 ?'hidden':'text-center'}><img src={img1}/></th>                        
                    </tr>
                    </thead>
		            <tr key='1'>
		                <td className={data.d1000===0 ?'hidden':'text-center'}>{data.d1000}</td>
		                <td className={data.d500===0 ?'hidden':'text-center'}>{data.d500}</td>
		                <td className={data.d100===0 ?'hidden':'text-center'}>{data.d100}</td>
		                <td className={data.d50===0 ?'hidden':'text-center'}>{data.d50}</td>
		                <td className={data.d10===0 ?'hidden':'text-center'}>{data.d10}</td>
		                <td className={data.d5===0 ?'hidden':'text-center'}>{data.d5}</td>
		                <td className={data.d1===0 ?'hidden':'text-center'}>{data.d1}</td>		                
		            </tr>
                    <tr key='2'>
                        <td className={data.d1000===0 ?'hidden':'text-center'}><CustomResultCell type='d1000' number={data.d1000}/></td>
                        <td className={data.d500===0 ?'hidden':'text-center'}><CustomResultCell type='d500' number={data.d500}/></td>
                        <td className={data.d100===0 ?'hidden':'text-center'}><CustomResultCell type='d100' number={data.d100}/></td>
                        <td className={data.d50===0 ?'hidden':'text-center'}><CustomResultCell type='d50' number={data.d50}/></td>
                        <td className={data.d10===0 ?'hidden':'text-center'}><CustomResultCell type='d10' number={data.d10}/></td>
                        <td className={data.d5===0 ?'hidden':'text-center'}><CustomResultCell type='d5' number={data.d5}/></td>
                        <td className={data.d1===0 ?'hidden':'text-center'}><CustomResultCell type='d1' number={data.d1}/></td>                      
                    </tr>
		    </table> <br/><br/>
            </div>     
        )
    }
}