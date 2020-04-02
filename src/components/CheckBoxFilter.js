import React from 'react'
import { Card, Checkbox } from 'semantic-ui-react'

const data = [
    {
        "_id": 1,
        "name": "PieChart"
    },
    {
        "_id": 2,
        "name": "DonutChart"
    },
    {
        "_id": 3,
        "name": "AreaChart"
    },
    {
        "_id": 4,
        "name": "StackAreaChart"
    },
    {
        "_id": 5,
        "name": "GroupedBarChart"
    },
    {
        "_id": 6,
        "name": "BarChart"
    },
    {
        "_id": 7,
        "name": "StackBarChart"
    },
    {
        "_id": 8,
        "name": "LineChart"
    },
    {
        "_id": 9,
        "name": "MapChart"
    },
    {
        "_id": 10,
        "name": "HSortBar"
    },
    {
        "_id": 11,
        "name": "CentralBar"
    },
]

class CheckBoxFilter extends React.Component {

    constructor()
    {
        super()
        this.state={}
    }
    handleOnChange = (e,data)=>{
        // console.log(e)
        // console.log(data.id)
        // console.log(data.checked)
        // console.log(data.label.props.children)
        this.props.handleOnChange(data.id,data.checked)
    }

    renderCheckBox = () => {
        return data.map((d) => {
            return <span><Checkbox
                label={<label>{d.name}</label>}
                id={d._id}
                key={d._id}
                onChange={this.handleOnChange}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        })
    }

    render() {
        return (
           
            <div>               
                {this.renderCheckBox()}
            </div>
         
        )
    }
}

export default CheckBoxFilter