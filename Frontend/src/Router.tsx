import { Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from './pages/Capture/CaptureRouter'



export default function AppRouter () {

	return (
		<Routes>
			<Route path="/" element={<Navigate to={'/pandora'} />} />
			<Route path="/pandora/*" element={<CaptureRouter/>} />

		</Routes>
	)

}