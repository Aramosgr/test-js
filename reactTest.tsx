/**
 * If you want to prove yours React skills, please try this test
 * TestComponent is a React component
 * getDataFromExternalSource(string id) is a function and it can return an IData object or undefined
 * 
 * 
 * WHAT THE COMPONENT SHOULD RETURN:
 * - If myData.age is less than 18, it should render the ComponentA
 * - If myData.age is more or equal than 18, it should render the ComponentB
 * 
 * 
 * TIPS: 
 * - The id in the props could change.
 * - The external data function can return undefined
 */

import React from "react";
import ComponentA from 'components/ComponentA';
import ComponentB from 'components/ComponentB';

export interface ITestComponentProps {
    id: string;
}

interface IData {
    name: string;
    age: number;
}

const TestComponent = (props: ITestComponentProps) => {

    const myData: IData | undefined = getDataFromExternalSource(id);

    return (
        
    );
}

export default TestComponent;



