module Api
    class UsersByEmailController < ApplicationController

        def show
            user = User.find_by!(email: params[:email])
            respond_to do |format|       
               format.json do
                    render json: user.to_json, status: :ok
               end               
            end            
            rescue ActiveRecord::RecordNotFound => e
                respond_to do |format|
                    format.json {
                        render json: {error: e.message }, status: :not_found
                    }               
                end                          
        end
    end      
end