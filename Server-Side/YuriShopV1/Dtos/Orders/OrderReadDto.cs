using System;
using System.Collections.Generic;
using YuriShopV1.Models;

namespace YuriShopV1.Dtos.Orders
{
    public class OrderReadDto
    {
        public int OrderId { get; set; }
        public string OrderState { get; set; }
        public DateTime TimeCreated { get; set; }
        public int UserRefId { get; set; }
        public List<PurchaseReadDto> Purchases { get; set; }
      //  public int UserRefId { get; set; }
    }
}
