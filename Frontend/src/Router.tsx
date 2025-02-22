import { Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from './pages/Capture/CaptureRouter'

const components = {  }


export default function AppRouter () {

	return (
		<Routes>
			<Route path="/" element={<h1>Skibidi</h1>} />
			<Route/>

		</Routes>
	)

}