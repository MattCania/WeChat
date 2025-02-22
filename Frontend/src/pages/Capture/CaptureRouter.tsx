import { Route, Routes, Navigate } from "react-router-dom";
import CaptureHeader from "../../partials/CaptureHeader";

export default function CaptureRouter() {
  return (
    <section
		className="flex flex-col justify-start items-start w-screen h-screen"
	>
      {/* Header */}
      <CaptureHeader />

      <div
	  	className="flex mt-10"
	  >
        <Routes>
          <Route
            path=''
            element={<h1>Capture Page</h1>}
          />
          <Route
            path='login'
            element={<h1>Login Page</h1>}
          />
          <Route
            path='register'
            element={<h1>Register Page</h1>}
          />
        </Routes>
      </div>
    </section>
  );
}
