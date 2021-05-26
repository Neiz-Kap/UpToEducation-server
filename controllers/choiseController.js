const {ChoiseCourses, Courses} = require('../models/models');

class ChoiseController {

    async getAll(req, res){
        const {user_id} = req.params;
        const choisesCourses = await ChoiseCourses.findAndCountAll({where: {user_id: choiseChoiseId}}, {raw: true}).map(course_id => {
            course_id = Courses.findOne({where: {course_id}});
//             const course = await Course.getById(req.body.id);
        });
        return res.json(choisesCourses);
    }

//     star passive in catalog
    async createOne(req, res){
        const {user_id, course_id} = req.body;
        const choiseCourse = await ChoiseCourses.create({user_id: choiseChoiseId, course_id});
        return res.json(choiseCourse);
    }

//     star active in choise
    async deleteOne(req, res){ }
}

module.exports = new ChoiseController()
