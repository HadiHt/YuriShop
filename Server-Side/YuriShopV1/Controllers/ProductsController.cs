﻿using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using YuriShopV1.Data.Users;
using YuriShopV1.Dtos.Products;
using YuriShopV1.Models;

namespace YuriShopV1.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICardRepo _cardRepo;
        private readonly IOrderRepo _orderRepo;
        private readonly IUserRepo _userRepo;
        private readonly IProductRepo _productRepo;

        public ProductsController(IMapper mapper, ICardRepo cardRepo, IOrderRepo orderRepo, IUserRepo userRepo, IProductRepo productRepo)
        {
            _mapper = mapper;
            _cardRepo = cardRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _productRepo = productRepo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProducts()
        {
            var Products = _productRepo.GetAllProducts();
            return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
        }
        [HttpGet("{id}")]
        public ActionResult<ProductReadDto> GetProductById(int id)
        {
            var Product = _productRepo.GetProductById(id);
            if (Product != null)
            {
                return Ok(_mapper.Map<ProductReadDto>(Product));
            }
            return NotFound();
        }
        [HttpGet("{id}/shop")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByShopId(int id)
        {
            var Products = _productRepo.GetAllProductsByShopId(id);
            if (Products != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
        [HttpGet("Category/{category}")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByCategory(string Category)
        {
            var Products = _productRepo.GetAllProductsByCategory(Category);
            if (Products != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
        [HttpGet("Name/{name}")]
        public ActionResult<IEnumerable<ProductReadDto>> GetAllProductsByName(string Name)
        {
            var Products = _productRepo.GetAllProductsByName(Name);
            if (Products != null)
            {
                return Ok(_mapper.Map<IEnumerable<ProductReadDto>>(Products));
            }
            return NotFound();
        }
    }
}
