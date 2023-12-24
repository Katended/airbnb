require 'rails_helper'
RSpec.descibe "Api::Users", type: :request do
    decribe 'GET Show' do

        context "user exists" do
            it "it is successfull" do
                
            end                      
        end
        context "user does not exist" do

             it "it is not found" do
                
            end                      
        end
    end
end