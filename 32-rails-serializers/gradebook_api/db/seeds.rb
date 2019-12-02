gene = Teacher.create(name: "Gene", subject: "Ruby")
aniece = Teacher.create(name: "Aniece", subject: "Math")

alg = Classroom.create(name: "Algebra 101", teacher: aniece)
trig = aniece.classrooms.create(name: "Trigonometry 201")

ruby = Classroom.create(name: "Ruby 101", teacher: gene)


Assignment.create(name: "Enumerables", classroom: ruby)
Assignment.create(name: "ActiveRecord", classroom: ruby)

Assignment.create(name: "Law of Sines", classroom: trig)
alg.assignments.create(name: "Quadratic Formula")
