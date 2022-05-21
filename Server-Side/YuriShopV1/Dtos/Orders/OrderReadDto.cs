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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        public int UserRefId { get; set; }
        public List<PurchaseReadDto> Purchases { get; set; }
      //  public int UserRefId { get; set; }
=======
       // public int UserRefId { get; set; }
        public List<PurchaseReadDto> Purchases { get; set; }
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
=======
       // public int UserRefId { get; set; }
        public List<PurchaseReadDto> Purchases { get; set; }
>>>>>>> origin
=======
       // public int UserRefId { get; set; }
        public List<PurchaseReadDto> Purchases { get; set; }
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
    }
}
