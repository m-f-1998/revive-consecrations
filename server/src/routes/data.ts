import { Router } from "express"
import { pool } from "../db.js"
import { rateLimit } from "express-rate-limit"

export const router = Router ( )

router.use ( rateLimit ( {
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable the X-RateLimit-* headers
  message: {
    status: 429,
    error: "Too many requests, please try again later."
  }
} ) )

router.get ( "/api/feasts/:category", async ( req, res ) => {
  const category = req.params?.category

  if ( !category ) {
    res.status ( 400 ).json ( {
      status: 400,
      error: "Category is required."
    } )
    return
  }

  try {
    const result = await pool.query ( "SELECT name, date, datedescription, description, url FROM feasts WHERE category = $1", [ category ] )
    res.send ( result.rows )
  } catch ( error ) {
    console.error ( "Error fetching feasts:", error )
    res.status ( 500 ).json ( {
      status: 500,
      error: "Internal server error."
    } )
    return
  }
} )

router.get ( "/api/prayers/:category", async ( req, res ) => {
  const category = req.params?.category

  if ( !category ) {
    res.status ( 400 ).json ( {
      status: 400,
      edocrror: "Category is required."
    } )
    return
  }

  try {
    const result = await pool.query ( "SELECT prayer_category, key, name, description, text, url FROM prayers WHERE category = $1", [ category ] )
    res.send ( result.rows.map ( row => ( {
      category: row.prayer_category,
      key: row.key,
      name: row.name,
      description: row.description,
      text: row.text,
      url: row.url
    } ) ) )
  } catch ( error ) {
    console.error ( "Error fetching prayers:", error )
    res.status ( 500 ).json ( {
      status: 500,
      error: "Internal server error."
    } )
    return
  }
} )

router.get ( "/api/videos/:category", async ( req, res ) => {
  const category = req.params?.category

  if ( !category ) {
    res.status ( 400 ).json ( {
      status: 400,
      error: "Category is required."
    } )
    return
  }

  try {
    const result = await pool.query ( "SELECT title, slug FROM videos WHERE category = $1", [ category ] )
    res.send ( result.rows )
  } catch ( error ) {
    console.error ( "Error fetching videos:", error )
    res.status ( 500 ).json ( {
      status: 500,
      error: "Internal server error."
    } )
    return
  }
} )