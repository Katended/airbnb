module Api
    class HomeController < ApplicationController

        def index
            @properties = Property.all                           
        end        
    end      
end