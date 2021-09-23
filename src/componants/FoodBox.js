import React from 'react';
import { Card, Col, Divider, Button, Row } from "antd";
import { v4 as uuid } from 'uuid';

export default function FoodBox(props) {
    const foodList = props.foods.map(food => {
        return (
            <div key={ uuid()}>
            <Divider orientation="left">Horizontal</Divider>
            <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                <img src={food.image} height={60} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                    <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
                </Card>
            </Col>
            </Row>
            </div>
        );
    })

    return (
		<>
			{foodList}
		</>
	)
    
}