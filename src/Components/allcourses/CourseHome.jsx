import React from "react"
import Back from "../common/back/Back"

import OnlineCourses from "./OnlineCourses"
import CoursesTable from "./CoursesTable"


const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesTable />
      <OnlineCourses />
     
    </>
  )
}

export default CourseHome