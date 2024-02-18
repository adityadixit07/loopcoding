import express from 'express'
import { loginAdmin } from '../controllers/AdminController.js'
import authorizeAdmin from '../utils/authorizeAdmin.js'
import CourseController from '../controllers/CourseController.js'
import  { authorizeAdminToken } from '../utils/Authorize.js'

const AdminRoutes=express.Router()

AdminRoutes.route('/login').post(authorizeAdmin,loginAdmin)
AdminRoutes.route('/create-course').post(authorizeAdminToken,CourseController.createCourse)
AdminRoutes.route('/add-module/:courseId').put(authorizeAdminToken,CourseController.addModules)
AdminRoutes.route('/delete-course/:courseId').delete(authorizeAdminToken,CourseController.deleteCourse)
AdminRoutes.route('/update-course/:courseId').put(authorizeAdminToken,CourseController.updateCourse)

export default AdminRoutes