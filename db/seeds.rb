# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Building.destroy_all
Expense.destroy_all
User.destroy_all

#create expenses seed
Expense.create!(title: 'Food', amount: 100, category: 'food')
Expense.create!(title: 'Clothes', amount: 200, category: 'shopping')
Expense.create!(title: 'Hospital', amount: 300, category: 'health')


# Create Buildings seed
buildings = [{ name: 'Rastaurant', category: 'food', level: 2 },
             { name: 'Clothes', category: 'shopping', level: 3 },
             { name: 'Hospital', category: 'health', level: 1 }]

buildings.each do |building|
  Building.create!(
    name: building[:name],
    category: building[:category],
    level: building[:level]
  )
end
