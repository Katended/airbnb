module Api
    class UsersController < ApplicationController
        def show
            user = User.find_by(id: params[:id])
            respond_to do |format|
               format.json {
                    render json: user.to_json, status: :ok
                }               
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