/* eslint-disable react/jsx-key */
// import {useState} from 'react';
// import axios from 'axios';
import Hero from './Hero';
import TasksPage from './task';

export default function Home() {

	
	return (
		<div className='h-screen w-full flex justify-center items-center'>

			<TasksPage/>
		</div>

	);
}