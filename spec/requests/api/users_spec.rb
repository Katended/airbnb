require 'rails_helper'
RSpec.describe "Api::Users", type: :request do
  describe 'GET Show' do
    context "user exists" do
      it "is successful" do
        user = create(:user)
        get api_user_path(user), headers: { 'ACCEPT' => 'application/json' }
        expect(response).to be_successful
      end
    end
  end
end

# RSpec.descibe "Api::Users", type: :request do
#     decribe 'GET Show' do
#         context "user exists" do
#             it "it is successfull" do
#                 user = create(:user)
#                 get api_user_path(user),header: { 'ACCEPT' => 'application/json' }
#                 expect(response).to be_successful
#             end                      
#         end
#     end
# end