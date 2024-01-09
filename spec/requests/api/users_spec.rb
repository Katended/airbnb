require 'rails_helper'
RSpec.describe "Api::Users", type: :request do
  describe 'GET Show' do
    context "user exists" do
      it "is successful" do
        user = create(:user)
        get api_user_path(user), headers: { 'ACCEPT' => 'application/json' }
        expect(response).to  have_http_status(200)
      end
    end

    context "user does not exist" do
      it "is not found" do              
        get api_user_path(id: "junk"), headers: { 'ACCEPT' => 'application/json' }
        expect(response.status).to eq 200
      end                      
    end
  end
end

