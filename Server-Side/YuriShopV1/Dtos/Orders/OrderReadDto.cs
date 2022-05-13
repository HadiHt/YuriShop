﻿using System;

namespace YuriShopV1.Dtos.Orders
{
    public class OrderReadDto
    {
        public int OrderId { get; set; }
        public string State { get; set; }
        public DateTime TimeCreated { get; set; }
        public int UserRefId { get; set; }
    }
}
