from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'students'
app.config['MONGO_URI']    = 'mongodb://localhost:27017/students'

mongo = PyMongo(app)
cors = CORS(app, resources={r"/student/*" : {"origins" : " * "}})
#app.config['CORS_HEADERS'] = 'Content-Type'

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
    header['Access-Control-Allow-Headers'] = 'access-control-allow-headers,content-type'
    return response

def student_factory(s):
    return ( { 'name' : s['name'],
               'email' : s['email'], 'birth' : s['birth'],
               'cpf' : s['cpf'], 'course' : s['course']
           } )

def student_factory2(name, email, birth, cpf, course):
    return ( { 'name' : name,
                'email' : email, 'birth' : birth,
                'cpf' : cpf, 'course' : course
           } )

@app.route('/student/', methods=['GET'])
def get_all_students():
    student = mongo.db.students
    output = []
    students = student.find().sort( [("name", 1)] )
    for s in students:
        output.append( student_factory(s) )

    return jsonify({ 'result' : output })

@app.route('/student/', methods=['POST', 'OPTIONS'])
def get_student():
    if request.method == 'OPTIONS':
        return '200 OK'
    student         = mongo.db.students
    name            = request.json['name']
    s = student.find( { 'name' : {'$regex' : '^'+name, '$options' : 'i' } } ).sort( [("name", 1)] )
    if s:
        output = []
        for _s in s:
            output.append( student_factory(_s) )

    else:
        output = "No such student."
    return jsonify( { 'result' : output } )

@app.route('/student/new', methods=['POST', 'OPTIONS'])
#@crossdomain(origin='*')
def add_student():
    if request.method == 'OPTIONS':
        return '200 OK'
    student         = mongo.db.students
    name            = request.json['name']
    email           = request.json['email']
    birth           = request.json['birth']
    cpf             = request.json['cpf']
    course          = request.json['course']
    student_check   = student.find_one( { 'cpf' : cpf })
    output          = []
    if student_check:
        output      = "Student already exists."
    else:
        student_id  = student.insert(student_factory2(name, email, birth,
                                                    cpf, course))
        student_new = student.find_one( { '_id' : student_id } )
        output      = student_factory(student_new)
    #return after_request(jsonify( {'result' : output} ))
    return jsonify( {'result' : output })

if __name__ == '__main__':
    app.run(debug=True)
