require 'rails_helper'
RSpec.describe "Api::UsersByEmail", type: :request do
  describe 'GET Show' do
    context "user exists" do
      it "is successful" do
        user = create(:user)
        get api_users_by_email_path, params:{email:user.email}, headers: { 'ACCEPT' => 'application/json' }
        expect(response).to  have_http_status(200)
      end
    end

    context "user does not exist" do
      it "is not found" do              
        get api_users_by_email_path(email: "junk@email.com"), headers: { 'ACCEPT' => 'application/json' }
        expect(response.status).to eq 404
      end                      
    end
  end
end

