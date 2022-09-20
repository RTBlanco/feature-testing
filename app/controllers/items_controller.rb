class ItemsController < ApplicationController
  def create
    item = List.first.items.create(item_params)
    render json: {id: item.id, note: item.note}
  end

  def destroy
    item = Item.find(params[:id])
    item.delete
  end

  private

  def item_params
    params.require(:item).permit(:note)
  end
end
