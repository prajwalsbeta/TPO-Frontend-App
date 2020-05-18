import axios from 'axios';

const URL = '';

/* Boilerplate code for api requests

export async function Fetch/UpdataName(){
    modifiedURL = `${URL}/`
    try {
        const {data} = await axios.get/post(`${modifiedURL}`);
        const modifiedData = data.map((dataItem) =>({
            
            
        }))
    } catch (error) {
        console.error(error);
    }
}

 */

export async function FetchViewStudentsDataList() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.get(`${modifiedURL}`);
		const modifiedData = data.map((dataItem) => ({}));
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
}

export async function FetchViewStudentsData() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.get(`${modifiedURL}`);
		const modifiedData = data.map((dataItem) => ({}));
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
}

export async function FetchApproveStudentsDataList() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.get(`${modifiedURL}`);
		const modifiedData = data.map((dataItem) => ({}));
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
}

export async function FetchApproveStudentsData() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.get(`${modifiedURL}`);
		const modifiedData = data.map((dataItem) => ({}));
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
}

export async function FetchViewCompanyData() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.get(`${modifiedURL}`);
		const modifiedData = data.map((dataItem) => ({}));
		return modifiedData;
	} catch (error) {
		console.error(error);
	}
}

export async function UpdataStudentDetails() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.post(`${modifiedURL}`);

		return;
	} catch (error) {
		console.error(error);
	}
}

export async function UpdateApproveStudent() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.post(`${modifiedURL}`);

		return;
	} catch (error) {
		console.error(error);
	}
}

export async function UpdateRejectStudent() {
	modifiedURL = `${URL}/`;
	try {
		const { data } = await axios.post(`${modifiedURL}`);

		return;
	} catch (error) {
		console.error(error);
	}
}
