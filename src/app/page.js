"use client"
import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import ProductFilters from '@/components/Filters'
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';



export default function Page({ searchParams }) {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [allProducts, setAllProducts] = useState([])

  const query = searchParams?.query || '';

  return (
    <>
      <Suspense>
        <Navbar products={allProducts} />
      </Suspense>
      <ProductFilters selectedCategories={selectedCategories} selectedPriceRanges={selectedPriceRanges} setSelectedCategories={setSelectedCategories} setSelectedPriceRanges={setSelectedPriceRanges} sortBy={sortBy} setSortBy={setSortBy} />
      <Suspense key={query}>
        <ProductCard selectedCategories={selectedCategories} selectedPriceRanges={selectedPriceRanges} sortBy={sortBy} setAllProducts={setAllProducts} query={query} />
      </Suspense>
    </>
  )
}
