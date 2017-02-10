require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get properties" do
    get :properties
    assert_response :success
  end

  test "should get investors" do
    get :investors
    assert_response :success
  end

  test "should get education" do
    get :education
    assert_response :success
  end

end
