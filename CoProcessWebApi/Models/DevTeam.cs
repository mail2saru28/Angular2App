﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoProcessWebApi.Models
{
    public class DevTeam
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public string title { get; set; }
    }
}