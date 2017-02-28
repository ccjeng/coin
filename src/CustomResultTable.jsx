import React from 'react'

export default class CustomResultTable extends React.Component {
    constructor(props){
        super(props);

        //var aa = this.props.resultAry;
        //console.log('length = ' + aa[0].d10);
        this.state = {
            data: this.props.resultAry
        }
    }

    render() {
        return (
            <center>
               <Tbody data={this.state.data}/><br/>               
            </center>
        )
    }
}

/**
 * tbody
 * 關鍵點是使用props來傳遞單向數據流。通過遍歷從`props傳來的數據data`生成表格的每一行數據
 */
class Tbody extends React.Component{
    render() {
        return (
            <div>
	            {this.props.data.map(function (coins, index) {
	                return <Item data={coins} index={index}/>
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
        	<tbody>
            <table className='table table-bordered'>
                    <thead>
                    <tr>
                        <th className={data.d1000===0 ?'hidden':'text-center'}>壹仟</th>
                        <th className={data.d500===0 ?'hidden':'text-center'}>伍佰</th>
                        <th className={data.d100===0 ?'hidden':'text-center'}>壹佰</th>
                        <th className={data.d50===0 ?'hidden':'text-center'}>伍拾</th>
                        <th className={data.d10===0 ?'hidden':'text-center'}>拾圓</th>
                        <th className={data.d5==0 ?'hidden':'text-center'}>伍圓</th>
                        <th className={data.d1===0 ?'hidden':'text-center'}>壹圓</th>                        
                    </tr>
                    </thead>
		            <tr key={index}>
		                <td className={data.d1000===0 ?'hidden':'text-center'}>{data.d1000}</td>
		                <td className={data.d500===0 ?'hidden':'text-center'}>{data.d500}</td>
		                <td className={data.d100===0 ?'hidden':'text-center'}>{data.d100}</td>
		                <td className={data.d50===0 ?'hidden':'text-center'}>{data.d50}</td>
		                <td className={data.d10===0 ?'hidden':'text-center'}>{data.d10}</td>
		                <td className={data.d5===0 ?'hidden':'text-center'}>{data.d5}</td>
		                <td className={data.d1===0 ?'hidden':'text-center'}>{data.d1}</td>		                
		            </tr>
		    </table>  
		    </tbody>      
        )
    }
}