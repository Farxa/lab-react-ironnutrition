import React from 'react'
import { Input, Button } from "antd";

export default function AddFoodForm(props) {
    return (
        <div className="addFoodForm">
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="name">Name</label>
                <Input value={props.name} type="text" id="name" onChange={props.handleNameChange} />
                <label htmlFor="image">Image</label>
                <Input value={props.image} type="text" id="image" onChange={props.handleImgChange} />
                <label htmlFor="calories">Calories</label>
                <Input value={props.calories} type="number" id="calories" onChange={props.handleCalChange} />
                <label htmlFor="servings">Servings</label>
                <Input value={props.servings} type="number" id="servings" onChange={props.handleServingsChange} />
                <Button htmlType="submit" className="createBtn">Create</Button>
            </form>
        </div>
    )
}