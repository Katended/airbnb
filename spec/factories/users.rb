factoryBot.define do    
  factory :user do
    sequence (:email) { |n| "foo_#{n}@example.com" }
    password  { 'password' }        
    end
end