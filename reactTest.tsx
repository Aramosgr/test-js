/**
 * If you want to prove your React skills, please try this test
 * TestComponent is a React component
 * getDataFromExternalSource(string id) is a function and it can return an IData object or undefined
 * 
 * 
 * WHAT THE COMPONENT SHOULD RETURN:
 * - If myData.age is less than 18, it should render the ComponentA
 * - If myData.age is greater than or equal to 18, it should render the ComponentB
 * 
 * 
 * TIPS: 
 * - This is a theoretical question, there is no need to install packages.
 * - ComponentA and ComponentB are not real components, just an example. You won´t be able to render this.
 * - The id in the props could change.
 * - The external data function can return undefined
 */

import React from "react";
import ComponentA from 'components/ComponentA';
import ComponentB from 'components/ComponentB';

const getDataFromExternalSource = (id: string): IData | undefined => {
    // This returns an IData object or undefined
};

export interface ITestComponentProps {
    id: string;
}

interface IData {
    name: string;
    age: number;
}

const TestComponent = (props: ITestComponentProps) => {

}

export default TestComponent;



