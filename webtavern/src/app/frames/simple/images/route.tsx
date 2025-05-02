import { NextRequest, NextResponse } from 'next/server';

import { ImageResponse } from 'next/og';
import LandingImage from '../LandingImage';
import ModulesImage from '../ModulesImage';
import StepsImage from '../StepsImage';
import CTAImage from '../CTAImage';
import NameImage from '../NameImage';

export async function GET(request: NextRequest) {
  const currentPage = request.nextUrl.searchParams.get('page');
  if (!currentPage) {
    return new NextResponse('Pass in a page as a parameter', { status: 400 });
  }

  if (currentPage === "one") {
    return new ImageResponse((
      <LandingImage />), { width: 1200, height: 630 });
  } else if (currentPage === "two") {
    return new ImageResponse((
      <ModulesImage />), { width: 1200, height: 630 });
  } else if (currentPage === "three") {
    return new ImageResponse((
      <StepsImage />), { width: 1200, height: 630 });
  } else if (currentPage === "four") {
    return new ImageResponse((
      <NameImage />), { width: 1200, height: 630 });
  } else if (currentPage === "five") {
    return new ImageResponse((
      <CTAImage />), { width: 1200, height: 630 });
  }
  return new NextResponse(null, { status: 204, statusText: 'Page does not exist' });
}