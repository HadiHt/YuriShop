using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace YuriShopV1.Dtos.Purchases
{
    public class PurchaseReadDto
    {
        public int PurchaseId { get; set; }
        public int OrderRefId { get; set; }
        public int ProductRefId { get; set; }
        public int Quantity { get; set; }
    }

}
