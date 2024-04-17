"use client"
import {useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductFilters from '@/components/Filters'
import { Suspense } from 'react';



export default function Page() {

const [selectedCategories, setSelectedCategories] = useState([]);
const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
const [sortBy, setSortBy] = useState("");

  return (
    <>   
    <ProductFilters selectedCategories={selectedCategories} selectedPriceRanges={selectedPriceRanges} setSelectedCategories={setSelectedCategories} setSelectedPriceRanges={setSelectedPriceRanges} sortBy={sortBy} setSortBy={setSortBy}/>
    <Suspense>
    <ProductCard selectedCategories={selectedCategories} selectedPriceRanges={selectedPriceRanges} sortBy={sortBy}/>
    </Suspense>
    </>
  )
}
